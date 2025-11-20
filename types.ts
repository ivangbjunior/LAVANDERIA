import React from 'react';

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export enum PresentationState {
  INTRO,
  PROBLEMS,
  SOLUTION,
  BENEFITS,
  TECHNOLOGY,
  FINANCIAL,
  QNA
}