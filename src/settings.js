// SPDX-FileCopyrightText: 2022 Carl Schwan <carl@carlschwan.eu>
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line node/no-extraneous-import
import Vue from 'vue'
import { translate, translatePlural } from '@nextcloud/l10n'

import SecuritySection from './components/SecuritySection.vue'

Vue.prototype.t = translate
Vue.prototype.n = translatePlural

const View = Vue.extend(SecuritySection)
new View({}).$mount('#security-end-to-end')
