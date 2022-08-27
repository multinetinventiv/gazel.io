
  import endent from 'endent';

  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart LR
    subgraph MA[Middleware Application]
        direction LR
        RAL[Rest Api Layer]
        SLCL[Service Local Client Layer]
        BLL[Business Logic Layer]
    end
    AS[A System]
    BS[B System]
    RAL -.-> SLCL -.-> BLL -.-> AS & BS
`}