
  import endent from 'endent';

  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart TD
    subgraph FP[Feature Perspective]
        direction TB
        subgraph XF[X Feature]
            direction LR
            XF_AL([A Layer Configuration])
            XF_BL([B Layer Configuration])
        end
        subgraph YF[Y Feature]
            direction LR
            YF_BL([B Layer Configuration])
        end
    end
`}