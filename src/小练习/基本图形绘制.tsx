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

        <circle
          cx="35"
          cy="45"
          r="5"
          fill="none"
          stroke="blue"
          strokeWidth="1"
        />
        <ellipse cx="35" cy="45" rx="15" ry="5" fill="none" stroke="blue" />
        <ellipse cx="35" cy="45" rx="5" ry="15" fill="none" stroke="blue" />
        <rect x="30" y="30" width="10" height="30" stroke="blue" fill="none" />
        <rect x="20" y="40" height="10" width="30" fill="none" stroke="blue" />
        <polyline
          points="30 30,40 30,50 40,50 50,40 60,30 60,20 50,20 40,30 30"
          stroke="blue"
          fill="none"
        />
      </svg>
    </>
  );
}

export default App;
