<script setup lang="ts">
interface SelectOption {
  label: string
  value: string | number
}

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  id: string
  options: (string | SelectOption)[]
  label?: string
  placeholder?: string
  multiple?: boolean
  message?: string
  error?: boolean
  wrapperClass?: string
  required?: boolean
}>()

const selectValue = defineModel<string | number | undefined>()

const selectSize = 'h-12 px-3 md:h-13'
const selectVariant =
  'border-gray-400 bg-gray-100 text-dark-800 focus:(border-blue-400 ring-blue-400/30) placeholder:text-dark-800'
const selectVariantError =
  'border-red-100 bg-red-100 text-red-600 focus:(border-red-600 ring-red-600/30) placeholder:text-red-600'
</script>

<template>
  <div class="relative" :class="wrapperClass">
    <label
      v-if="label"
      :for="id"
      class="mb-1.5 inline-block"
      :class="{ 'after:content-[\'*\'] after:ml-0.5': required }"
    >
      {{ label }}
    </label>
    <select
      v-bind="$attrs"
      :id="id"
      v-model="selectValue"
      :multiple="multiple"
      class="block w-full border rounded-2 py-2 focus:outline-0 focus:ring-4"
      :class="[!multiple ? `${selectSize} pr-10` : 'px-3', error ? selectVariantError : selectVariant]"
    >
      <option v-if="placeholder" :value="undefined">{{ placeholder }}</option>
      <template v-for="(option, index) in options">
        <option v-if="typeof option === 'string'" :key="`string-${index}`" :value="option">
          {{ option }}
        </option>
        <option v-else :key="`object-${index}`" :value="option.value">
          {{ option.label }}
        </option>
      </template>
    </select>
    <div v-if="message" class="mt-1.5 block text-sm" :class="error && 'text-red-600'">
      {{ message }}
    </div>
  </div>
</template>
