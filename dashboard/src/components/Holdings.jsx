import React from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { VerticalGraph } from "./VerticalGraph";
import { useQuery } from "@tanstack/react-query";

const fetchHoldings = async () => {
  const res = await axios.get("https://zeordha-clone.onrender.com/allHoldings");
  return res.data;
};

const Holdings = () => {
  const { data: allHoldings = [], isLoading } = useQuery({
    queryKey: ["holdings"],
    queryFn: fetchHoldings,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Avoid unnecessary refetching
  });

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">
        Holdings ({isLoading ? <Skeleton width={50} /> : allHoldings.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? // Show skeleton rows while loading
                Array(5)
                  .fill("")
                  .map((_, i) => (
                    <tr key={i}>
                      {Array(8)
                        .fill("")
                        .map((_, j) => (
                          <td key={j}>
                            <Skeleton width={80} height={20} />
                          </td>
                        ))}
                    </tr>
                  ))
              : // Show actual data when fetched
                allHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{isLoading ? <Skeleton width={100} /> : "29,875.55"}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{isLoading ? <Skeleton width={100} /> : "31,428.95"}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{isLoading ? <Skeleton width={100} /> : "1,553.40 (+5.20%)"}</h5>
          <p>P&L</p>
        </div>
      </div>

      {isLoading ? <Skeleton height={300} /> : <VerticalGraph data={data} />}
    </>
  );
};

export default Holdings;
