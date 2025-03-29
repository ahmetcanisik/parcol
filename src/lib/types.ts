export type MessageType = string;

export interface ColorType {
  id: string;
  method: (m: MessageType) => void;
}
