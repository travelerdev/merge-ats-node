/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AccountDetailsService } from './services/AccountDetailsService';
import { AccountTokenService } from './services/AccountTokenService';
import { ActivitiesService } from './services/ActivitiesService';
import { ApplicationsService } from './services/ApplicationsService';
import { AttachmentsService } from './services/AttachmentsService';
import { AvailableActionsService } from './services/AvailableActionsService';
import { CandidatesService } from './services/CandidatesService';
import { DeleteAccountService } from './services/DeleteAccountService';
import { DepartmentsService } from './services/DepartmentsService';
import { EeocsService } from './services/EeocsService';
import { ForceResyncService } from './services/ForceResyncService';
import { GenerateKeyService } from './services/GenerateKeyService';
import { InterviewsService } from './services/InterviewsService';
import { IssuesService } from './services/IssuesService';
import { JobInterviewStagesService } from './services/JobInterviewStagesService';
import { JobsService } from './services/JobsService';
import { LinkedAccountsService } from './services/LinkedAccountsService';
import { LinkTokenService } from './services/LinkTokenService';
import { OffersService } from './services/OffersService';
import { OfficesService } from './services/OfficesService';
import { PassthroughService } from './services/PassthroughService';
import { RegenerateKeyService } from './services/RegenerateKeyService';
import { RejectReasonsService } from './services/RejectReasonsService';
import { ScorecardsService } from './services/ScorecardsService';
import { SyncStatusService } from './services/SyncStatusService';
import { TagsService } from './services/TagsService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class UnderlyingMergeATS {

    public readonly accountDetails: AccountDetailsService;
    public readonly accountToken: AccountTokenService;
    public readonly activities: ActivitiesService;
    public readonly applications: ApplicationsService;
    public readonly attachments: AttachmentsService;
    public readonly availableActions: AvailableActionsService;
    public readonly candidates: CandidatesService;
    public readonly deleteAccount: DeleteAccountService;
    public readonly departments: DepartmentsService;
    public readonly eeocs: EeocsService;
    public readonly forceResync: ForceResyncService;
    public readonly generateKey: GenerateKeyService;
    public readonly interviews: InterviewsService;
    public readonly issues: IssuesService;
    public readonly jobInterviewStages: JobInterviewStagesService;
    public readonly jobs: JobsService;
    public readonly linkedAccounts: LinkedAccountsService;
    public readonly linkToken: LinkTokenService;
    public readonly offers: OffersService;
    public readonly offices: OfficesService;
    public readonly passthrough: PassthroughService;
    public readonly regenerateKey: RegenerateKeyService;
    public readonly rejectReasons: RejectReasonsService;
    public readonly scorecards: ScorecardsService;
    public readonly syncStatus: SyncStatusService;
    public readonly tags: TagsService;
    public readonly users: UsersService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.merge.dev/api/ats/v1',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.accountDetails = new AccountDetailsService(this.request);
        this.accountToken = new AccountTokenService(this.request);
        this.activities = new ActivitiesService(this.request);
        this.applications = new ApplicationsService(this.request);
        this.attachments = new AttachmentsService(this.request);
        this.availableActions = new AvailableActionsService(this.request);
        this.candidates = new CandidatesService(this.request);
        this.deleteAccount = new DeleteAccountService(this.request);
        this.departments = new DepartmentsService(this.request);
        this.eeocs = new EeocsService(this.request);
        this.forceResync = new ForceResyncService(this.request);
        this.generateKey = new GenerateKeyService(this.request);
        this.interviews = new InterviewsService(this.request);
        this.issues = new IssuesService(this.request);
        this.jobInterviewStages = new JobInterviewStagesService(this.request);
        this.jobs = new JobsService(this.request);
        this.linkedAccounts = new LinkedAccountsService(this.request);
        this.linkToken = new LinkTokenService(this.request);
        this.offers = new OffersService(this.request);
        this.offices = new OfficesService(this.request);
        this.passthrough = new PassthroughService(this.request);
        this.regenerateKey = new RegenerateKeyService(this.request);
        this.rejectReasons = new RejectReasonsService(this.request);
        this.scorecards = new ScorecardsService(this.request);
        this.syncStatus = new SyncStatusService(this.request);
        this.tags = new TagsService(this.request);
        this.users = new UsersService(this.request);
    }
}

