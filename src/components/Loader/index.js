import React from 'react'

export const Loader = props => (
  <svg
    width={75}
    height={75}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className="prefix__lds-ripple"
    style={{
      background: '0 0',
    }}
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={23.661}
      fill="none"
      stroke="#4dde93"
      strokeWidth={2}
    >
      <animate
        attributeName="r"
        calcMode="spline"
        values="0;40"
        keyTimes="0;1"
        dur={1}
        keySplines="0 0.2 0.8 1"
        begin="-0.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        values="1;0"
        keyTimes="0;1"
        dur={1}
        keySplines="0.2 0 0.8 1"
        begin="-0.5s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={39.368}
      fill="none"
      stroke="#45bcde"
      strokeWidth={2}
    >
      <animate
        attributeName="r"
        calcMode="spline"
        values="0;40"
        keyTimes="0;1"
        dur={1}
        keySplines="0 0.2 0.8 1"
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        values="1;0"
        keyTimes="0;1"
        dur={1}
        keySplines="0.2 0 0.8 1"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
)
