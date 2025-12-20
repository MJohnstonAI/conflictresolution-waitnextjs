/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = "IDLE",
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export type ViewState = { type: "home" } | { type: "waitlist" };

export type DemoMode = "Peacekeeper" | "Barrister" | "Defense";

export interface DemoExample {
  mode: DemoMode;
  conflict: string;
  response: string;
  highRiskResponse: string;
  opponentFollowUp?: string;
  userSecondResponse?: string;
  followUpMode?: DemoMode;
}

