export interface Orders {
    id: number
    cart: Cart
    name: string
    address: string
    phone: number
    session_id: string
    payment_method: string
    order_confirmation_method: string
    date_created: string
}

export interface Cart {
    id: number
    item: Item[]
    total_amount: number
}

export interface Item {
    id: number
    product: Product
    variants: Variant[]
    quantity: number
    total_price: number
    notes: string
    beef_quantity: number
    fridge_status: string
    alive_delivery_form: boolean
    category: number
}

export interface Product {
    id: number
    name: string
    price: number
}

export interface Variant {
    option_name: OptionName
    option_value: OptionValue
}

export interface OptionName {
    name: string
}

export interface OptionValue {
    value: string
}