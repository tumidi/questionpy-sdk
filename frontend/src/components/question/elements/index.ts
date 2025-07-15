/*
 * This file is part of the QuestionPy SDK. (https://questionpy.org)
 * The QuestionPy SDK is free software released under terms of the MIT license. See LICENSE.md.
 * (c) Technische Universität Berlin, innoCampus <info@isis.tu-berlin.de>
 */

import type { Component } from 'vue'

import type { FormElement } from '@/types'

import CheckboxElement from './CheckboxElement.vue'
import GeneratedIdElement from './GeneratedIdElement.vue'
import GroupElement from './GroupElement.vue'
import HiddenElement from './HiddenElement.vue'
import RadioGroupElement from './RadioGroupElement.vue'
import RepetitionElement from './RepetitionElement.vue'
import SelectElement from './SelectElement.vue'
import StaticTextElement from './StaticTextElement.vue'
import TextAreaElement from './TextAreaElement.vue'
import TextInputElement from './TextInputElement.vue'

/** Maps an element `kind` property to a component. */
const elementComponentMap = {
    checkbox: CheckboxElement,
    id: GeneratedIdElement,
    group: GroupElement,
    hidden: HiddenElement,
    radio_group: RadioGroupElement,
    repetition: RepetitionElement,
    select: SelectElement,
    static_text: StaticTextElement,
    textarea: TextAreaElement,
    input: TextInputElement,
} satisfies Record<FormElement['kind'], Component>

export { elementComponentMap }
