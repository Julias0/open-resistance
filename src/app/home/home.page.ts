import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Card } from '../card';
import { Consequnece } from '../consequence';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef;

  loaderCard: Card = {
    type: 'text',
    content: 'loading',
  };

  gameOver = false;

  slides: Card[] = [
    {
      type: 'text',
      content: 'Swipe Right to get started',
      rightChoice: 'Lets Go!',
    },
    this.loaderCard,
    this.loaderCard,
  ];

  health = 100;
  wealth = 1000;
  popularity = 50;
  age = 20;

  constructor(private storyService: StoryService) {}

  handleEventConsequence(event: {
    health?: number;
    wealth?: number;
    popularity?: number;
    content: any;
  }) {
    const that = this;
    if (event.health) {
      that.health += event.health;
      if (that.health > 100) {
        that.health = 100;
      }

      if (that.health <= 0) {
        // Game Over Scenario
        const consequenceCard: Card = {
          type: 'text',
          content:
            event.content + '\n You have died. Reload the game to play again.',
          rightChoice: 'next year',
        };

        that.slides = [consequenceCard, consequenceCard, consequenceCard];
        that.gameOver = true;
        return;
      }
    }

    if (event.wealth) {
      that.wealth += event.wealth;

      if (that.wealth < 0) {
        that.popularity -= 30;
      }
    }

    if (event.popularity) {
      that.popularity += event.popularity;
    }

    const consequenceCard: Card = {
      type: 'text',
      content: event.content,
      rightChoice: 'next year',
    };

    that.slides = [this.loaderCard, consequenceCard, this.loaderCard];
  }

  handleDirectionConsequence(consequence: Consequnece) {
    const that = this;
    if (consequence) {
      const chance = Math.random() * 100;
      if (chance < consequence.chance) {
        // success
        that.handleEventConsequence(consequence.success);
      } else {
        // failure
        if (consequence.failure) {
          that.handleEventConsequence(consequence.failure);
        }
      }
    }
  }

  handleAction(direction: 'left' | 'right') {
    const that = this;
    if (that.slides[1].type === 'text') {
      // get a story
      const story = this.storyService.getRandomStory(
        that.age,
        that.health,
        that.wealth,
        that.popularity
      );

      that.slides = [this.loaderCard, story, this.loaderCard];
    } else {
      // check decision and conclude story
      if (direction === 'right') {
        const consequence = this.slides[1].rightConsequence?.();
        if (consequence) {
          that.handleDirectionConsequence(consequence);
        }
      } else if (direction === 'left') {
        const consequence = this.slides[1].leftConsequence?.();
        if (consequence) {
          that.handleDirectionConsequence(consequence);
        }
      }
    }
  }

  ngAfterViewInit(): void {
    const that = this;

    let firstRun = true;
    let userAction = true;
    that.swiper.nativeElement.addEventListener(
      'swiperslidechange',
      (event: any) => {
        if (!that.gameOver) {
          if (!firstRun) {
            userAction = !userAction;
          }

          if (userAction) {
            that.handleAction(
              event.detail[0].touches.diff < 0 ? 'right' : 'left'
            );

            that.swiper.nativeElement.swiper.slideTo(1, 1000, false);
          }

          if (firstRun) {
            userAction = false;
          }

          firstRun = false;
        }
      }
    );
  }
}
