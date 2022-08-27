
  import endent from 'endent';

  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart TD
    subgraph LP[Layer Perspective]
        direction LR
        subgraph AL[A Layer]
            direction LR
            AL_XF([X Feature Configuration])
        end
        subgraph BL[B Layer]
            direction LR
            BL_XF([X Feature Configuration])
            BL_YF([Y Feature Configuration])
        end
    end
    AL -. depends on .-> BL
`}