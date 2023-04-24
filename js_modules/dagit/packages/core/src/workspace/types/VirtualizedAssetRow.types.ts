// Generated GraphQL types, do not edit manually.

import * as Types from '../../graphql/types';

export type SingleAssetQueryVariables = Types.Exact<{
  input: Types.AssetKeyInput;
}>;

export type SingleAssetQuery = {
  __typename: 'DagitQuery';
  assetOrError:
    | {
        __typename: 'Asset';
        id: string;
        assetMaterializations: Array<{
          __typename: 'MaterializationEvent';
          runId: string;
          timestamp: string;
        }>;
        definition: {
          __typename: 'AssetNode';
          id: string;
          computeKind: string | null;
          opNames: Array<string>;
          staleStatus: Types.StaleStatus | null;
          groupName: string | null;
          isSource: boolean;
          isObservable: boolean;
          hasMaterializePermission: boolean;
          description: string | null;
          repository: {
            __typename: 'Repository';
            id: string;
            name: string;
            location: {__typename: 'RepositoryLocation'; id: string; name: string};
          };
          assetKey: {__typename: 'AssetKey'; path: Array<string>};
          assetMaterializations: Array<{
            __typename: 'MaterializationEvent';
            timestamp: string;
            runId: string;
          }>;
          assetObservations: Array<{
            __typename: 'ObservationEvent';
            timestamp: string;
            runId: string;
          }>;
          freshnessInfo: {
            __typename: 'AssetFreshnessInfo';
            currentMinutesLate: number | null;
          } | null;
          staleCauses: Array<{
            __typename: 'StaleCause';
            reason: string;
            category: Types.StaleCauseCategory;
            key: {__typename: 'AssetKey'; path: Array<string>};
            dependency: {__typename: 'AssetKey'; path: Array<string>} | null;
          }>;
          partitionStats: {
            __typename: 'PartitionStats';
            numMaterialized: number;
            numMaterializing: number;
            numPartitions: number;
            numFailed: number;
          } | null;
          partitionDefinition: {__typename: 'PartitionDefinition'; description: string} | null;
        } | null;
        key: {__typename: 'AssetKey'; path: Array<string>};
      }
    | {__typename: 'AssetNotFoundError'};
  assetsLatestInfo: Array<{
    __typename: 'AssetLatestInfo';
    unstartedRunIds: Array<string>;
    inProgressRunIds: Array<string>;
    assetKey: {__typename: 'AssetKey'; path: Array<string>};
    latestRun: {
      __typename: 'Run';
      id: string;
      status: Types.RunStatus;
      endTime: number | null;
    } | null;
  }>;
};
