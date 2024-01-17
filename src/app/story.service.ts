import { Injectable } from '@angular/core';
import { Card } from './card';
import { Consequnece } from './consequence';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  gameEvents: Card[] = [
    {
      type: 'event',
      content: `
        You come across a hidden resistance group in the underground tunnels of Mumbai.
        They ask for your help in smuggling vital supplies to the oppressed citizens.
      `,
      rightChoice: 'Join the resistance and aid in the smuggling operation',
      rightConsequence: (): Consequnece => {
        return {
          chance: 30,
          success: {
            content:
              'You are successful in aiding the resistance group. Their boss meets and thanks you personally',
            popularity: 20,
            wealth: 300,
          },
          failure: {
            content:
              'You were caught by police. They tortured you till you leaked details about the resistance.',
            health: -40,
            popularity: -50,
          },
        };
      },
      leftChoice: 'Avoid getting involved and continue your journey',
      leftConsequence: (): Consequnece => {
        return {
          chance: 100,
          success: {
            content:
              'The resistance group is not happy. But they begrudgingly let you go',
            popularity: -10,
          },
        };
      },
    },
    {
      type: 'event',
      content: `
          You receive a distress signal from a resistance safehouse.
          They urgently need medical supplies to treat wounded members.
        `,
      rightChoice: 'Join the mission to deliver medical supplies',
      rightConsequence: () => ({
        chance: 40,
        success: {
          content:
            'You successfully deliver the medical supplies, earning the trust of the resistance.',
          popularity: 15,
          wealth: 100,
        },
        failure: {
          content:
            'Government forces intercept you, confiscating the supplies and identifying you as a resistance supporter.',
          health: -30,
          popularity: -40,
        },
      }),
      leftChoice: 'Ignore the distress signal and continue your own mission',
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The resistance is disappointed, but you avoid government attention for now.',
          popularity: -10,
        },
      }),
    },
    {
      type: 'event',
      content: `
          A high-ranking resistance leader seeks your help in rescuing captured members.
          The operation is risky but could significantly boost the resistance's strength.
        `,
      rightChoice: 'Participate in the rescue mission',
      rightConsequence: () => ({
        chance: 25,
        success: {
          content:
            'The rescue mission is a success, and the freed members join the cause.',
          popularity: 20,
          wealth: 150,
        },
        failure: {
          content:
            'Government forces ambush the rescue team, leading to casualties and increased oppression.',
          health: -50,
          popularity: -30,
        },
      }),
      leftChoice: 'Decline the mission to avoid unnecessary risks',
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The resistance respects your decision, but the captured members face an uncertain fate.',
          popularity: -5,
        },
      }),
    },
    {
      type: 'event',
      content: `
          A mysterious informant offers critical information about government plans.
          They demand payment or a favor in return for the valuable intel.
        `,
      rightChoice: 'Pay the informant for the crucial information',
      rightConsequence: () => ({
        chance: 50,
        success: {
          content:
            'The information proves vital, helping the resistance strategize effectively.',
          popularity: 10,
          wealth: -50,
        },
        failure: {
          content:
            'The informant betrays you, leading government forces straight to a resistance hideout.',
          health: -20,
          popularity: -40,
        },
      }),
      leftChoice: `Reject the informant's offer and seek information independently`,
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'You avoid potential betrayal but struggle to gather crucial intel for the resistance.',
          popularity: -10,
        },
      }),
    },
    {
      type: 'event',
      content: `
          The resistance discovers a hidden government facility conducting unethical experiments.
          They ask for your help in exposing the facility to the public.
        `,
      rightChoice: 'Collaborate with the resistance to expose the facility',
      rightConsequence: () => ({
        chance: 35,
        success: {
          content: `The exposure sparks public outrage, weakening the government's grip on power.`,
          popularity: 25,
          wealth: 50,
        },
        failure: {
          content:
            'Government agents catch wind of the plan, leading to a crackdown on the resistance.',
          health: -30,
          popularity: -20,
        },
      }),
      leftChoice: 'Stay away from the facility and avoid unnecessary conflicts',
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The resistance is disappointed, but you avoid potential danger for now.',
          popularity: -15,
        },
      }),
    },
    {
      type: 'event',
      content: `
          A rival faction within the resistance questions your loyalty.
          They challenge you to a duel to prove your commitment to the cause.
        `,
      rightChoice: 'Accept the duel and defend your loyalty',
      rightConsequence: () => ({
        chance: 45,
        success: {
          content:
            'You emerge victorious, earning the respect of the faction and solidifying your place in the resistance.',
          popularity: 15,
          wealth: 50,
        },
        failure: {
          content:
            'The duel exposes doubts about your loyalty, leading to increased scrutiny and isolation.',
          health: -25,
          popularity: -30,
        },
      }),
      leftChoice: 'Refuse the duel and seek diplomatic resolution',
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The faction reluctantly accepts your decision, avoiding unnecessary internal conflict.',
          popularity: -10,
        },
      }),
    },
    {
      type: 'event',
      content: `
          A valuable resistance asset is captured and held in a heavily guarded government facility.
          The resistance asks for your help in planning a daring rescue mission.
        `,
      rightChoice: 'Coordinate the rescue mission to free the captured asset',
      rightConsequence: () => ({
        chance: 30,
        success: {
          content:
            'The rescue mission is a success, and the freed asset becomes a valuable ally for the resistance.',
          popularity: 20,
          wealth: 100,
        },
        failure: {
          content:
            'Government forces tighten security, making future resistance actions more challenging.',
          health: -40,
          popularity: -30,
        },
      }),
      leftChoice:
        'Stay away from the risky rescue mission and focus on personal goals',
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The resistance understands your decision, but the captured asset remains in government custody.',
          popularity: -15,
        },
      }),
    },
    {
      type: 'event',
      content: `
          The resistance learns of a government plot to manipulate public sentiment against them.
          They request your assistance in uncovering and thwarting the propaganda scheme.
        `,
      rightChoice: `Investigate and disrupt the government's propaganda plan`,
      rightConsequence: () => ({
        chance: 40,
        success: {
          content:
            'Your efforts expose the propaganda scheme, boosting public sympathy for the resistance.',
          popularity: 25,
          wealth: 50,
        },
        failure: {
          content: `Your attempt to disrupt the propaganda backfires, causing more harm to the resistance's image.`,
          health: -30,
          popularity: -20,
        },
      }),
      leftChoice: `Ignore the resistance's request and focus on personal objectives`,
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The resistance is disappointed, but you avoid potential complications for now.',
          popularity: -10,
        },
      }),
    },
    {
      type: 'event',
      content: `
          An influential resistance member is accused of collaborating with the government.
          The resistance seeks your help in either proving or disproving the accusations.
        `,
      rightChoice: `Investigate the accusations and clear the member's name`,
      rightConsequence: () => ({
        chance: 35,
        success: {
          content:
            'Your investigation reveals a set-up, exonerating the accused member and strengthening unity within the resistance.',
          popularity: 20,
          wealth: 50,
        },
        failure: {
          content: `Your efforts to clear the member's name fail, leading to internal divisions and distrust.`,
          health: -25,
          popularity: -30,
        },
      }),
      leftChoice:
        'Stay neutral in the internal conflict and let the resistance handle it',
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The internal conflict escalates, but you avoid direct involvement and maintain a semblance of neutrality.',
          popularity: -15,
        },
      }),
    },
    {
      type: 'event',
      content: `
          The resistance obtains classified government documents with information on hidden atrocities.
          They ask for your assistance in disseminating the information to the public.
        `,
      rightChoice:
        'Help leak the classified documents to expose government atrocities',
      rightConsequence: () => ({
        chance: 30,
        success: {
          content:
            'The leaked documents cause public outrage, triggering international attention and condemnation.',
          popularity: 25,
          wealth: 100,
        },
        failure: {
          content:
            'Your attempt to leak the documents is foiled, and you become a prime target for government retribution.',
          health: -40,
          popularity: -30,
        },
      }),
      leftChoice:
        'Avoid involvement in leaking classified documents and focus on personal goals',
      leftConsequence: () => ({
        chance: 100,
        success: {
          content:
            'The resistance is disappointed, but you avoid the potential dangers associated with leaking classified information.',
          popularity: -10,
        },
      }),
    },
  ];

  // storyScenarios: Card[] = [
  //   {
  //     type: 'event',
  //     content: `
  //       A woman runs upto you.
  //       "Save my son! He is stuck in the burning building!"
  //     `,
  //     rightChoice: "Try to save the woman's child",
  //     rightConsequence: (): Consequnece => {
  //       return {
  //         chance: 50,
  //         success: {
  //           popularity: 10,
  //           health: -10,
  //           content: 'You save the boy. You are hurt with some minor burns. People hail you as a hero!'
  //         },
  //         failure: {
  //           health: -30,
  //           content: 'The roof collapses on you as you enter the building. You suffer major burns',
  //         }
  //       }
  //     },
  //     leftChoice: 'Ignore the woman',
  //     leftConsequence: (): Consequnece => {
  //       return {
  //         chance: 100,
  //         success: {
  //           popularity: -20,
  //           content: 'The woman falls to the ground and cries at you feet. You shoo her away and go on your merry way. People notice this.'
  //         }
  //       }
  //     }
  //   }
  // ]

  constructor() {}

  getRandomChance() {
    return Math.random() * 100 > 50;
  }

  getRandomStory(
    age: number,
    health: number,
    wealth: number,
    popularity: number
  ) {
    let selectedEvent;
    if (popularity < 30 && this.getRandomChance()) {
      // low popularity scenario triggers
    }

    if (wealth > 800 && this.getRandomChance()) {
      // high wealth event triggers
    }

    if (health < 50 && this.getRandomChance()) {
      // low health event triggers
    }

    if (age > 45 && this.getRandomChance()) {
      // midlife crisis triggers
    }

    // normal events
    if (!selectedEvent) {
      const activeEvents = this.gameEvents.filter((event) => !event.done);
      selectedEvent =
        activeEvents[Math.floor(Math.random() * activeEvents.length)];
    }

    return selectedEvent;
  }
}
