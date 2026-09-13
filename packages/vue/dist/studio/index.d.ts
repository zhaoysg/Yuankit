import type {DefineComponent} from 'vue';
export type FieldValue = string | number | boolean | Array<{value:string;label:string;content?:string;disabled?:boolean}>;
export type AssetSettings = Record<string, FieldValue>;
export interface DesignSystem {global?: AssetSettings;components?: Record<string,AssetSettings>}
export interface AssetPreset {schemaVersion:1;libraryVersion:'0.5.0';asset:string;settings:AssetSettings;designSystem:DesignSystem}
export interface AssetDescriptor {id:string;name:string;title:string;group:string;fields:string[];defaults:AssetSettings;source:string;limitations:string;status:string;since:string}
export interface FieldDefinition {key:string;label:string;type:'range'|'text'|'select'|'color'|'boolean'|'items';default:FieldValue;group:string;min?:number;max?:number;step?:number;unit?:string;maxLength?:number;options?:Array<{value:string;label:string}>}
export declare const YkAsset:DefineComponent<{asset:string;settings?:AssetSettings;designSystem?:DesignSystem;onAction?:(event:{asset:string;action:string;value?:unknown})=>void}>;
export declare const assets:AssetDescriptor[];
export declare const fieldDefinitions:Record<string,FieldDefinition>;
export declare const sharedKeys:string[];
export declare function getAsset(id:string):AssetDescriptor;
export declare function resolveSettings(id:string,settings?:AssetSettings,system?:DesignSystem):AssetSettings;
export declare function validateSettings(id:string,settings?:AssetSettings):AssetSettings;
export declare function validateDesignSystem(system?:DesignSystem):DesignSystem;
export declare function createPreset(id:string,settings?:AssetSettings,system?:DesignSystem):AssetPreset;
export declare function parsePreset(input:string|unknown):AssetPreset;
export declare function toVueSFC(preset:AssetPreset):string;
export declare function cssProperties(settings:AssetSettings):Record<string,string>;
export declare function settingsToTheme(settings:AssetSettings):import('../types.js').YuanConfig;
