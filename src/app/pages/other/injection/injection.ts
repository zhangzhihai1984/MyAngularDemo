import { InjectionToken, Provider, forwardRef, Type } from '@angular/core'

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

interface ValueAccessor {
    id: string
    writeValue1(value: any): void
    writeValue2: (value: any) => void
    writeValue3?: (value: any) => void
    registerOnChange: (fn: (_: any) => void) => void
}

class ValueAccessorImpl implements ValueAccessor {
    id: ''
    writeValue1(value: any) { }
    writeValue2 = (value: any) => { }
    registerOnChange = (fn: (_: any) => void) => { fn('') }
}

interface IForwardRefFn {
    (): any
}

const forwardRefFnImpl = (fn: IForwardRefFn): Type<any> => fn()
export const forwardRefDI = (): DI => {
    let type = forwardRefFnImpl(() => DI)
    return new type
}