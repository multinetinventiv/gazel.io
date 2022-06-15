
  import endent from 'endent';
  
  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  sequenceDiagram
autonumber
    actor User
    participant A as Service Client
    participant B as Service Application
    participant C as Session Interceptor
    participant C1 as ISessionManager
    participant C2 as ISession
    participant D as Business Service
    User->>+A: Take action that requires Authorization
    A->>+B: Sends Request
    B->>+C: Validate Token
    C->>+C1 : Call GetSession()
    C1-->>-C : Returns ISession
    C->>+C2 : Call Validate()
    C2-->>-C : Validates Session
    C->>C : Sets ISession to Context.Session
    C-->>-B: Returns OK
    B->>+D: Forwards Request
    D-->>-B: Returns Response
    B-->>-A: Returns Response
    A-->>-User: Sees result
`}