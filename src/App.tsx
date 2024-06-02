import './App.css';

function App() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="500"
        height="500"
        style={{ border: '#aaa solid' }}
      >
        <g>
          <path
            d="M0 10 H100 M0 20 H100 M0 30 H100 M0 40 H100 M0 50 H100 M0 60 H100 M0 70 H100 M0 80 H100 M0 90 H100
                    M10 0 V100 M20 0 V100 M30 0 V100 M40 0 V100 M50 0 V100 M60 0 V100 M70 0 V100 M80 0 V100 M90 0 V100"
            stroke="#aaa"
            stroke-width=".2"
            fill="none"
          />
          <text x="0" y="3" font-size="3">
            0
          </text>
          <text x="8" y="3" font-size="3">
            10
          </text>
          <text x="18" y="3" font-size="3">
            20
          </text>
          <text x="28" y="3" font-size="3">
            30
          </text>
          <text x="38" y="3" font-size="3">
            40
          </text>
          <text x="48" y="3" font-size="3">
            50
          </text>
          <text x="58" y="3" font-size="3">
            60
          </text>
          <text x="68" y="3" font-size="3">
            70
          </text>
          <text x="78" y="3" font-size="3">
            80
          </text>
          <text x="88" y="3" font-size="3">
            90
          </text>
          <text y="11" x="0" font-size="3">
            10
          </text>
          <text y="21" x="0" font-size="3">
            20
          </text>
          <text y="31" x="0" font-size="3">
            30
          </text>
          <text y="41" x="0" font-size="3">
            40
          </text>
          <text y="51" x="0" font-size="3">
            50
          </text>
          <text y="61" x="0" font-size="3">
            60
          </text>
          <text y="71" x="0" font-size="3">
            70
          </text>
          <text y="81" x="0" font-size="3">
            80
          </text>
          <text y="91" x="0" font-size="3">
            90
          </text>
        </g>

        <path d="M30 30 L60 30" fill="none" stroke="blue" strokeWidth="1" />
        <line
          x1="30"
          y1="40"
          x2="60"
          y2="40"
          fill="none"
          stroke="red"
          strokeWidth="1"
        />
      </svg>
    </>
  );
}

export default App;
