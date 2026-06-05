import { Component, Input } from '@angular/core';
import { SkillColor, SkillModel } from '../models/skill-model';

@Component({
  selector: 'app-case-study-hero-component',
  imports: [],
  templateUrl: './case-study-hero-component.html',
  styleUrl: './case-study-hero-component.scss',
})
export class CaseStudyHeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string | null = null;
  @Input() company: string = '';
  @Input() year: string = '';
  @Input() role: string = '';
  @Input() summary: string | null = null;
  @Input() tags: SkillModel[] = [];

  getTagClass(color: SkillColor): string {
    const map: Record<SkillColor, string> = {
      [SkillColor.Green]: 'tag-chip--green',
      [SkillColor.Primary]: 'tag-chip--blue',
      [SkillColor.Secondary]: 'tag-chip--purple',
      [SkillColor.Gold]: 'tag-chip--gold',
    };
    return map[color] ?? '';
  }
}
