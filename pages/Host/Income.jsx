import React from "react";

export default function Income() {
  const chartData = [
    { month: "Ju", value: 4000, color: "#FFEAD0" },
    { month: "Au", value: 1500, color: "#FFEAD0" },
    { month: "Se", value: 3000, color: "#FFEAD0" },
    { month: "Oc", value: 2500, color: "#FFEAD0" },
    { month: "No", value: 1500, color: "#FF8C38" },
    { month: "De", value: 500, color: "#FF8C38" },
  ];

  const transactionsData = [
    { price: 720, date: "1/12/25" },
    { price: 560, date: "10/11/25" },
    { price: 980, date: "23/12/25" },
  ];

  return (
    <section className="income-container">
      <div className="income-header">
        <h1>Income</h1>
        <p>
          Last<span> 30 days</span>
        </p>
        <h2>$2,260</h2>
      </div>

      <div className="chart-wrapper">
        <div className="y-axis">
          {["$5k", "$4k", "$3k", "$2k", "$1k", "$0"].map((label, index) => (
            <div key={index} className="y-axis-label">
              {label}
            </div>
          ))}
        </div>

        <div className="chart-area">
          <div className="grid-lines">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="grid-line"></div>
            ))}
          </div>

          <div className="bars">
            {chartData.map((item, index) => (
              <div key={index} className="bar-container">
                <div
                  className="bar"
                  style={{
                    height: `${(item.value / 5000) * 100}%`,
                    backgroundColor: item.color,
                  }}
                />
                <div className="month">{item.month}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="transactions-header">
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className="transactions-data-container">
        {transactionsData.map((item, index) => (
          <div className="transactions-data" key={index}>
            <h4>${item.price}</h4>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
