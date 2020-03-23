import { InjectionToken, Provider, forwardRef, Type } from '@angular/core'

export class Dep {
    content: string = 'dep default'
}

export class DI {
    content: string = 'di default'

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

export const DI_FACTORY_TOKEN = new InjectionToken<DI>('DI factory')
export const DI_FACTORY_PROVIDER: Provider = {
    provide: DI_FACTORY_TOKEN,
    useFactory: () => {
        const di = new DI()
        di.content = 'useFactory'
        return di
    }
}

export const DI_FACTORY_PARAM_TOKEN = new InjectionToken<DI>('DI factory with param')
export const DI_FACTORY_PARAM_PROVIDER: Provider = {
    provide: DI_FACTORY_PARAM_TOKEN,
    useFactory: (dep: Dep) => {
        const di = new DI()
        di.content = 'useFactory'
        return di
    },
    deps: [Dep]
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
const forwardRefDI = (): DI => {
    let type = forwardRefFnImpl(() => DI)
    return new type
}