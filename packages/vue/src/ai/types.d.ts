export type AIStatus = 'idle' | 'streaming' | 'success' | 'error';
export type AIRole = 'user' | 'assistant' | 'system';
export interface AIMessageData {id:string;role:AIRole;content:string;status?:AIStatus;name?:string}
export interface AISource {id:string;title:string;url:string;description?:string}
export interface AIAttachment {id:string;name:string;size:number;type?:string}
export interface AIModelOption {value:string;label:string;disabled?:boolean}
export interface AIActivityStep {id:string;label:string;status:'pending'|'running'|'success'|'error';description?:string}
export interface AIPromptPayload {text:string;files:File[];model:string}

/** Methods exposed through the PromptInput template ref. */
export interface AIPromptInputHandle { clearAttachments(): void; focus(): void }
/** Methods exposed through the Conversation template ref. */
export interface AIConversationHandle { scrollToLatest(): void }
