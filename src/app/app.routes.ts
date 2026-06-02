import { Routes } from '@angular/router';
import { AiToolsCaseStudyPage } from './pages/ai-tools-case-study-page';
import { TacitKnowledgeCaseStudyPage } from './pages/tacit-knowledge-case-study-page';
import { ClientSurveyCaseStudyPage } from './pages/client-survey-case-study-page';
import { ReleaseNotesProcessCaseStudyPage } from './pages/release-notes-process-case-study-page';
import { Homepage } from './pages/homepage';

export const routes: Routes = [
    { path: '', component: Homepage, title: 'Meghan Neuman | Portfolio'},
    { path: 'case-study/tacit-knowledge', component: TacitKnowledgeCaseStudyPage, title: 'Meghan Neuman | Capturing Tacit Knowledge Case Study' },
    { path: 'case-study/client-survey', component: ClientSurveyCaseStudyPage, title: 'Meghan Neuman | Client Survey Case Study' },
    { path: 'case-study/release-notes-process', component: ReleaseNotesProcessCaseStudyPage, title: 'Meghan Neuman | Release Notes Process Case Study' },
    { path: 'case-study/ai-tools', component: AiToolsCaseStudyPage, title: 'Meghan Neuman | AI Tools Case Study' },
];
