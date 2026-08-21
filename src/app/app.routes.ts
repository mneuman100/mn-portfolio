import { Routes } from '@angular/router';
import { AiToolsCaseStudyPage } from './pages/ai-tools-case-study-page';
import { TacitKnowledgeCaseStudyPage } from './pages/tacit-knowledge-case-study-page';
import { ClientSurveyCaseStudyPage } from './pages/client-survey-case-study-page';
import { ReleaseNotesProcessCaseStudyPage } from './pages/release-notes-process-case-study-page';
import { Homepage } from './pages/homepage';
import { HelpCenterCaseStudyPage } from './pages/help-center-case-study-page';
import { AboutPage } from './pages/about';
import { ResumePage } from './pages/resume';
import { ImportingMigrationFilesTwSamplePage } from './pages/importing-migration-files-tw-sample-page';
import { ManagingBillingDatesTwSamplePage } from './pages/managing-billing-dates-tw-sample-page';
import { PerformingDocumentReviewTwSamplePage } from './pages/performing-document-review-tw-sample-page';
import { ReleaseNoteSampleTwSamplePage } from './pages/release-note-sample-tw-sample-page';
import { TimesheetApprovalProcessTwSamplePage } from './pages/timesheet-approval-process-tw-sample-page';
import { FileImportDashboardTwSamplePage } from './pages/file-import-dashboard-tw-sample-page';
import { AcceptableUsePolicyTwSamplePage } from './pages/acceptable-use-policy-tw-sample-page';
import { BusinessImpactAnalysisTwSamplePage } from './pages/business-impact-analysis-tw-sample-page';
import { RiskAssessmentTwSamplePage } from './pages/risk-assessment-tw-sample-page';

export const routes: Routes = [
    { path: '', component: Homepage, title: 'Meghan Neuman | Portfolio'},
    { path: 'case-study/tacit-knowledge', component: TacitKnowledgeCaseStudyPage, title: 'Meghan Neuman | Capturing Tacit Knowledge Case Study' },
    { path: 'case-study/client-survey', component: ClientSurveyCaseStudyPage, title: 'Meghan Neuman | Client Survey Case Study' },
    { path: 'case-study/release-notes-process', component: ReleaseNotesProcessCaseStudyPage, title: 'Meghan Neuman | Release Notes Process Case Study' },
    { path: 'case-study/ai-tools', component: AiToolsCaseStudyPage, title: 'Meghan Neuman | AI Tools Case Study' },
    { path: 'case-study/help-center', component: HelpCenterCaseStudyPage, title: 'Meghan Neuman | Help Center Case Study' },
    { path: 'about', component: AboutPage, title: 'Meghan Neuman | About' },
    { path: 'resume', component: ResumePage, title: 'Meghan Neuman | Resume' },
    { path: 'TW_portfolio/importing-migration-files', component: ImportingMigrationFilesTwSamplePage, title: 'Meghan Neuman | Importing Migration Files Sample' },
    { path: 'TW_portfolio/managing-billing-dates', component: ManagingBillingDatesTwSamplePage, title: 'Meghan Neuman | Managing Billing Dates Sample' },
    { path: 'TW_portfolio/performing-document-review', component: PerformingDocumentReviewTwSamplePage, title: 'Meghan Neuman | Performing a Document Review Sample' },
    { path: 'TW_portfolio/release-note-sample', component: ReleaseNoteSampleTwSamplePage, title: 'Meghan Neuman | Release Notes Sample' },
    { path: 'TW_portfolio/timesheet-approval-process', component: TimesheetApprovalProcessTwSamplePage, title: 'Meghan Neuman | Timesheet Approval Process Sample' },
    { path: 'TW_portfolio/file-import-dashboard', component: FileImportDashboardTwSamplePage, title: 'Meghan Neuman | File Import Dashboard Sample' },
    { path: 'TW_portfolio/acceptable-use-policy', component: AcceptableUsePolicyTwSamplePage, title: 'Meghan Neuman | Acceptable Use Policy Sample' },
    { path: 'TW_portfolio/business-impact-analysis', component: BusinessImpactAnalysisTwSamplePage, title: 'Meghan Neuman | Business Impact Analysis Sample' },
    { path: 'TW_portfolio/risk-assessment', component: RiskAssessmentTwSamplePage, title: 'Meghan Neuman | Risk Assessment Sample' },
];
