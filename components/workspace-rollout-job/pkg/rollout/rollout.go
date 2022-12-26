// Copyright (c) 2022 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License.AGPL.txt in the project root for license information.

package rollout

type RollOutJob struct {
	oldCluster    string
	newCluster    string
	prometheusURL string

	// Timer
}

func new(oldCluster, newCluster, prometheusURL string) *RollOutJob {
	return &RollOutJob{
		oldCluster:    oldCluster,
		newCluster:    newCluster,
		prometheusURL: prometheusURL,
	}
}

func (r *RollOutJob) start() {

}
