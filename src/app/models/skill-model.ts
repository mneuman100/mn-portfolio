export class SkillModel {
    skill: string = '';
    color: SkillColor = SkillColor.Green;
}

export enum SkillColor {
    Green = '#2D7A5D',
    Primary = 'var(--color-primary)',
    Secondary = 'var(--color-secondary)',
    Gold = '#bfa409'
}