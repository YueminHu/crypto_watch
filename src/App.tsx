import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Status from "./Footer";
import PriceCell from "./Cell";
// import useGetMapStorage from "./hooks/useGetMapStorage";
// import WSStatus from "./Status";
import AddToken from "./Add";
import useGetListings from "./hooks/useGetListings";
import useGetMapStorage from "./hooks/useGetMapStorage";
import useSubsequentUpdate from "./hooks/useSubsequentUpdate";
import eventEmitter from "./utils/eventEmitter";
import Info from "./Info";
import { GlobalContextProvider } from "./context";

const Separater = "_";

const LOCAL_KEY = "LOCAL_KEY";
const LOCAL_ID_KEY = "LOCAL_ID_KEY";

const Wrapper = styled.div`
  text-align: left;
  padding: 0px 8px;
  /* padding-top: 8px; */
`;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  /* top: 0; */
  background-image: linear-gradient(
    to bottom,
    var(--background-color) 0%,
    var(--background-color) 70%,
    transparent 100%
  );
  top: -1px;
  z-index: 10;
  > div:first-child {
    flex-grow: 1;
  }
`;

const getIds = () => {
  const idsStored =
    localStorage.getItem(LOCAL_ID_KEY) ||
    new URL(window.location.href).searchParams.get("ids") ||
    "";
  return idsStored.split(Separater).map((id) => ({
    id: Number(id) || 1,
  }));
};

export default function App() {
  const [wsStatus, setWSStatus] = useState<number>(0);
  const [edit, setEdit] = useState(false);

  const [prices, setPrices] = useState<
    {
      id: number;
      price?: number;
      p24h?: number;
      slug?: string;
      name?: string;
    }[]
  >(getIds);

  const [expandStatus, setExpandStatus] = useState({});

  const ids = prices.map(({ id }) => id);

  const resubscribing = useRef(false);

  const mapData = useGetMapStorage(LOCAL_KEY);

  const WSInstance = useRef<WebSocket>();

  const [refetchAPI, lastRefetch] = useGetListings(ids, setPrices);

  const initWS = () => {
    let WS;
    try {
      WS = new WebSocket("wss://stream.coinmarketcap.com/price/latest");
      WSInstance.current = WS;
    } catch (e) {
      console.log("reconnect!");
      setTimeout(() => {
        initWS();
        subscribeWS(ids);
      }, 1000);
    }
  };

  const closeWS = () => {
    WSInstance.current?.close();
  };

  const subscribeWS = (ids: number[]) => {
    if (!WSInstance.current) return;
    const WS = WSInstance.current;
    setWSStatus(WS.readyState);
    WS.onopen = function () {
      console.log("ws connected!");
      setWSStatus(WS.readyState);
      if (resubscribing.current) {
        resubscribing.current = false;
      }
      const param = {
        method: "subscribe",
        id: "price",
        data: {
          cryptoIds: ids,
        },
      };
      WS.send(JSON.stringify(param));

      WS.onmessage = function (res) {
        const data = JSON.parse(res.data);
        if (data?.d?.cr) {
          const info = data.d.cr;
          // console.log(info);
          eventEmitter.emit(`WS-${info.id}`, info);
          setPrices((prices) => {
            return prices.map((p) => {
              if (p.id === info.id) {
                return {
                  ...info,
                  ...p,
                  price: info.p,
                  p24h: info.p24h,
                };
              }
              return p;
            });
          });
        } else {
          console.log(data);
        }
      };
      WS.addEventListener("close", (e) => {
        console.log("ws closed!");
        setWSStatus(WS.readyState);
        if (!resubscribing.current) {
          console.log("reconnecting...");
          refetchAPI();
          setTimeout(() => {
            initWS();
            subscribeWS(ids);
          }, 1000);
        }
      });
    };
  };

  const reconnect = () => {
    console.log("reconnect!");
    closeWS();
    initWS();
    subscribeWS(ids);
  };

  const handleAddOrRemove = (id: number, add?: boolean) => {
    if (ids.includes(id) && add) {
      return;
    }
    setPrices((prices) => {
      const newPrices = add
        ? [
            ...prices,
            {
              id: id,
            },
          ]
        : prices.filter((price) => price.id !== id);
      return newPrices;
    });
  };

  const handleExpand = (expand?: boolean) => {
    if (expand) {
      // setExpandStatus((e) => e.map((_) => 1));
    } else {
      setExpandStatus({});
    }
  };

  const writeURL = (ids: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("ids", ids);
    window.history.replaceState("", document.title, url);
  };

  /**
   * rewrite URL when id length / order changes
   */
  useSubsequentUpdate(() => {
    const idsString = ids.join(Separater);
    writeURL(idsString);
    localStorage.setItem(LOCAL_ID_KEY, idsString);
    // if (ids.length) {
    // }
  }, ids.join());

  /**
   * resubscribe when id length changes
   */
  useEffect(() => {
    if (ids.length) {
      resubscribing.current = true;
      reconnect();
    }
  }, [ids.length]);

  // console.log(prices)

  return (
    <GlobalContextProvider>
      <div className='App'>
        {/* <Gas /> */}
        <HeadWrapper>
          <AddToken
            onAdd={(id: number) => handleAddOrRemove(id, true)}
            mapData={mapData}
          />
          <button onClick={() => handleExpand(false)}>{"Collapse All"}</button>
          &nbsp;
          <button onClick={() => setEdit(!edit)}>
            {edit ? "Done" : "Edit"}
          </button>
          {/* &nbsp;
        <button onClick={() => handleExpand(true)}>{"Expand"}</button> */}
        </HeadWrapper>
        <Wrapper>
          {prices.map((info: any, idx) => (
            <PriceCell
              name={mapData[info.id]?.symbol}
              key={info.id}
              info={info}
              onRemove={(id: number) => handleAddOrRemove(id)}
              prices={prices}
              setPrices={setPrices}
              idx={idx}
              expandStatus={expandStatus}
              setExpandStatus={setExpandStatus}
              edit={edit}
            />
          ))}
        </Wrapper>
        <Info />
        {/* <button onClick={() => console.log(eventEmitter)}>Log!</button> */}
        {/* <WSStatus /> */}
        {ids.length ? (
          <Status
            wsStatus={wsStatus}
            // wsInstance={WSInstance}
            reconnect={reconnect}
            lastRefetch={lastRefetch}
          />
        ) : null}

        {/* <div>
        <button onClick={() => closeWS()}>Disconnect</button>
        <button
          onClick={() => {
            initWS();
            subscribeWS(ids);
          }}
        >
          Connect
        </button>
      </div> */}
      </div>
    </GlobalContextProvider>
  );
}
