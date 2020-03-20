import { InjectionToken, Provider, forwardRef } from '@angular/core'

export class DI {
    content: string = 'default'

    constructor() { }
}

export const DI_VALUE_TOKEN = new InjectionToken<DI>('DI value')

export const DI_VALUE_PROVIDER: Provider = {
    provide: DI_VALUE_TOKEN,
    useValue: { content: 'useValue' }
}

export const DI_CLASS_TOKEN = new InjectionToken<DI>('DI class')

export const DI_CLASS_PROVIDER: Provider = {
    provide: DI_CLASS_TOKEN,
    useClass: DI
}

export const DI_EXISTING_TOKEN = new InjectionToken<DI>('DI existing')
export const DI_EXISTING_PROVIDER: Provider = {
    provide: DI_EXISTING_TOKEN,
    useExisting: DI
}

export const CLASS_NAME_TOKEN = new InjectionToken<string[]>('scss class')