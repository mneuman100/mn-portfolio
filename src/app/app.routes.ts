import { Routes } from '@angular/router';
import { AiToolsCaseStudyPage } from './pages/ai-tools-case-study-page';
import { TacitKnowledgeCaseStudyPage } from './pages/tacit-knowledge-case-study-page';
import { ClientSurveyCaseStudyPage } from './pages/client-survey-case-study-page';
import { ReleaseNotesProcessCaseStudyPage } from './pages/release-notes-process-case-study-page';
import { Homepage } from './pages/homepage';
import { HelpCenterCaseStudyPage } from './pages/help-center-case-study-page';
import { AboutPage } from './pages/about';
import { ResumePage } from './pages/resume';

export const routes: Routes = [
    { path: '', component: Homepage, title: 'Meghan Neuman | Portfolio'},
    { path: 'case-study/tacit-knowledge', component: TacitKnowledgeCaseStudyPage, title: 'Meghan Neuman | Capturing Tacit Knowledge Case Study' },
    { path: 'case-study/client-survey', component: ClientSurveyCaseStudyPage, title: 'Meghan Neuman | Client Survey Case Study' },
    { path: 'case-study/release-notes-process', component: ReleaseNotesProcessCaseStudyPage, title: 'Meghan Neuman | Release Notes Process Case Study' },
    { path: 'case-study/ai-tools', component: AiToolsCaseStudyPage, title: 'Meghan Neuman | AI Tools Case Study' },
    { path: 'case-study/help-center', component: HelpCenterCaseStudyPage, title: 'Meghan Neuman | Help Center Case Study' },
    { path: 'about', component: AboutPage, title: 'Meghan Neuman | About' },
    { path: 'resume', component: ResumePage, title: 'Meghan Neuman | Resume' },
];
