import type { DefineComponent } from 'vue';
export interface YkChartProps {data?:Array<{label:string;value:number}>;kind?:'bar'|'line';label?:string;showTable?:boolean}
export declare const YkChart: DefineComponent<YkChartProps>;
