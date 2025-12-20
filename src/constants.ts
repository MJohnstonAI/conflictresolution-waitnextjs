/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DemoExample, JournalArticle } from "./types";

export const JOURNAL_ARTICLES: JournalArticle[] = [];

export const BRAND_NAME = "Conflict Resolution";
export const PRIMARY_COLOR = "stone-900";
export const ACCENT_COLOR = "stone-500";

export const DEMO_EXAMPLES: DemoExample[] = [
  {
    mode: "Barrister",
    conflict:
      "You are so irresponsible! I'm keeping the deposit and you can sue me if you want!",
    response:
      "Per our lease agreement, the deposit must be returned within 30 days. I have documented the move-out condition. Please remit payment to avoid legal escalation.",
    highRiskResponse:
      "I'm coming to see you and my deposit better be sitting on the table.",
  },
  {
    mode: "Peacekeeper",
    conflict: "You always dismiss my feelings. I'm done talking.",
    response:
      "I hear you. I don't want to argue - I want to understand what hurt you. If you're open to it, can we talk later for 10 minutes and I'll just listen?",
    highRiskResponse:
      "Fine. I'm screenshotting this and showing people what you're like.",
    opponentFollowUp: "Too late. You never actually listen when I speak.",
    userSecondResponse:
      "I get why you feel that way. I'll listen, take notes, and not defend myself. If you're up for it, let's set a 10-minute call tomorrow so you know I'm hearing you.",
    followUpMode: "Peacekeeper",
  },
  {
    mode: "Barrister",
    conflict: "I'm not paying your invoice. The work wasn't worth it.",
    response:
      "Per our agreement, the deliverables were submitted on time and accepted on [date]. I've attached the itemized scope and approval thread - please remit payment by [date] or propose a written dispute itemization.",
    highRiskResponse: "Pay me or I'll trash your business everywhere.",
    opponentFollowUp: "Your work was sloppy. I'm not paying for rework.",
    userSecondResponse:
      "The approved scope and acceptance email confirm delivery quality. If you believe specific items need correction, please list them in writing so I can address or rebut them. Payment remains due per the contract.",
    followUpMode: "Barrister",
  },
  {
    mode: "Defense",
    conflict: "Stop parking in my spot or I'll have you towed.",
    response:
      "That space is assigned to my unit per the lease/HOA allocation. If you believe otherwise, please share the written allocation and I'll verify - until then, please stop making towing threats.",
    highRiskResponse:
      "Touch my car, and then I am going to park my fist down your throat.",
    opponentFollowUp: "The Tow truck is scheduled this week if you ignore this.",
    userSecondResponse:
      "I've documented the assigned space and will involve property management if towing is attempted. Please cancel any tow request and share your allocation proof; otherwise, you'll be responsible for wrongful towing costs.",
    followUpMode: "Defense",
  },
  {
    mode: "Peacekeeper",
    conflict: "You can't change the kids' schedule. I'm taking them this weekend.",
    response:
      "I want stability for the kids, so I'm sticking to the agreed schedule. If you need a swap, propose an alternative weekend and we'll confirm it in writing so there's no confusion.",
    highRiskResponse: "I'm taking them anyway. I'm not following the schedule.",
  },
  {
    mode: "Barrister",
    conflict: "We don't do cancellations. You'll keep getting billed.",
    response:
      "I cancelled on [date] and have confirmation/reference #[ID]. Any further charges are unauthorized. Please confirm cancellation in writing and refund any post-cancellation charges within 5 business days.",
    highRiskResponse: "I'm blocking my card and ignoring any bills from you.",
  },
  {
    mode: "Defense",
    conflict: "HR says you're difficult - consider this a warning.",
    response:
      "I take feedback seriously. Please provide the specific incidents, expectations, and measurable targets in writing so I can address them. I'm also available to discuss this with HR present.",
    highRiskResponse:
      "I'm going to post this warning online so everyone sees how HR treats people.",
  },
  {
    mode: "Peacekeeper",
    conflict: "You embarrassed me in front of everyone. Don't talk to me.",
    response:
      "I'm sorry - my intention wasn't to embarrass you. I can see why it landed badly. If you're willing, I'd like to hear what felt hurtful and make it right.",
    highRiskResponse: "I'm calling you out in the group chat so everyone knows.",
    opponentFollowUp: "An apology doesn't fix it. You humiliated me.",
    userSecondResponse:
      "I understand you're hurt. Let me know what would feel like making it right—whether it's a direct acknowledgment to the group or giving you space. I want to repair this, not rush you.",
    followUpMode: "Peacekeeper",
  },
  {
    mode: "Barrister",
    conflict: "Your warranty claim is denied - we say you caused the damage.",
    response:
      "Please provide the inspection report and the clause you're relying on for denial. I'm requesting escalation and a written reconsideration; I have dated photos, proof of purchase, and service history.",
    highRiskResponse:
      "I did drop it once, but you still owe me a replacement.",
  },
  {
    mode: "Defense",
    conflict: "You never pay utilities on time. I'm cutting the internet today.",
    response:
      "I'll pay my share today once you send the bill/statement. Cutting a shared service isn't acceptable - if this keeps happening, we should put utilities in one name with automatic split payments.",
    highRiskResponse: "Do it and I'm not paying any utilities this month.",
  },
  {
    mode: "Barrister",
    conflict: "We delivered the item. No replacement, no refund.",
    response:
      "The tracking does not show delivery to my address and I did not receive the item. Please provide proof of delivery and resolve this by [date], otherwise I'll escalate through the payment platform's dispute process.",
    highRiskResponse:
      "I gave you the wrong address, but I want a refund anyway.",
  },
];

