
  import endent from 'endent';
  
  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart LR
    subgraph SA[Service Application]
        direction LR
        SL[Service Layer]
        BLL[Business Logic Layer]
        DAL[Data Access Layer]
    end
    DB[(Database)]
    SL -.-> BLL -.-> DAL -.-> DB
`}