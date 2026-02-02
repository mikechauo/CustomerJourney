flowchart LR

%% --- CLIENT ---
C_START((Start))
C_SUBMIT[Submit Info]
C_CALL[Attend Sales Call]
C_FIX[Provide Missing Info]

%% --- SALES ---
S_REVIEW[Review Lead]
S_CALL[Conduct Sales Call]
S_ENTER[Enter Deal Data]
S_FOLLOW[Follow Up]

%% --- CRM ---
CRM_CREATE[Create Deal & Contact]
CRM_VALIDATE{All Required Fields?}
CRM_UPDATE[Update Deal Status]

%% --- AI ---
AI_TRANSCRIBE[Transcribe Calls & Emails]
AI_EXTRACT[Extract Structured Data]
AI_SCORE[Risk & Fit Scoring]
AI_SUMMARY[Generate Client Summary]

%% --- RISK ---
RISK_CHECK{Risk Acceptable?}
RISK_REVIEW[Manual Review]
RISK_REJECT[Reject Deal]

%% --- AUTOMATION ---
AUTO_CREATE[Create Sub-Account]
AUTO_DEPLOY[Deploy Workflows]
AUTO_AI[Configure AI Agent]

%% --- OPS ---
OPS_ASSIGN[Assign Account Manager]
OPS_KICKOFF[Schedule Kickoff Call]
OPS_MONITOR[Weekly Monitoring]
OPS_ESCALATE[Escalate Issues]
END((End))

%% --- FLOW ---
C_START --> C_SUBMIT --> S_REVIEW
S_REVIEW --> S_CALL --> S_ENTER --> CRM_CREATE
CRM_CREATE --> CRM_VALIDATE

CRM_VALIDATE -- No --> S_FOLLOW --> C_FIX --> CRM_CREATE
CRM_VALIDATE -- Yes --> AI_TRANSCRIBE --> AI_EXTRACT --> AI_SCORE

AI_SCORE --> RISK_CHECK
RISK_CHECK -- No --> RISK_REVIEW --> RISK_REJECT --> END
RISK_CHECK -- Yes --> AI_SUMMARY --> AUTO_CREATE --> AUTO_DEPLOY --> AUTO_AI

AUTO_AI --> OPS_ASSIGN --> OPS_KICKOFF --> OPS_MONITOR
OPS_MONITOR --> OPS_ESCALATE --> OPS_MONITOR
OPS_MONITOR --> END
