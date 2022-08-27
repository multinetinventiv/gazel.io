
  import endent from 'endent';

  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart LR
    subgraph GA[Gateway Application]
        direction LR
        GL[Gateway Layer]
        SCL[Service Client Layer]
    end
    subgraph SA[Service Application]
        direction LR
        SL[Service Layer]
    end
    GL -.-> SCL -.-> SL
`}