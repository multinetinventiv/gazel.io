
  import endent from 'endent';
  
  export default {
      diagram : endent`
  %%{init: {'theme':'base'}}%%
  flowchart LR
    subgraph AP[Application Perspective]
        direction LR

        subgraph L[Layers]
            direction LR
            AL[A Layer]
            BL[B Layer]
        end

        subgraph F[Features]
            direction LR
            XF{{X Feature}}
            YF{{Y Feature}}
        end

        XF -. configures .-> AL & BL
        YF -. configures .-> BL
    end
`}