
  import endent from 'endent';
  
  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart LR
    subgraph AA[Api Application]
        direction LR
        RAL[Rest Api Layer]
        SCL[Service Client Layer]
    end
    subgraph SA[Service Application]
        direction LR
        SL[Service Layer]
    end
    RAL -.-> SCL -.-> SL
`}