
  import endent from 'endent';

  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart LR
    subgraph GA[Command Line Application]
        direction LR
        GL[Command Line Layer]
    end
`}