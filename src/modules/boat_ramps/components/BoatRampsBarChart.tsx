import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalBarSeriesPoint } from 'react-vis';

export type Props = {
  data: VerticalBarSeriesPoint[];
  onValueClick: (val: VerticalBarSeriesPoint) => void;
};

const BoatRampsBarChart: React.FC<Props> = (props) => {
  return (
    <XYPlot height={300} width={440} xType="ordinal">
      <XAxis
        style={{
          text: { fontSize: 12 },
        }}
      />
      <YAxis
        style={{
          text: { fontSize: 12 },
        }}
      />
      <VerticalBarSeries data={props.data} barWidth={0.6} onValueClick={props.onValueClick} />
    </XYPlot>
  );
};

export default BoatRampsBarChart;
