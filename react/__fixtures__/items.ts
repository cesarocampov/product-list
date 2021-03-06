import type { Item } from 'vtex.checkout-graphql'

export const items: Array<Item & { index: number }> = [
  {
    index: 0,
    additionalInfo: {
      brandName: 'Test Brand 0',
    },
    availability: 'available',
    id: '1',
    detailUrl: '/work-shirt/p',
    listPrice: 2800000,
    measurementUnit: 'un',
    name: 'قميص العمل الأعلى',
    price: 2400000,
    productId: '1',
    quantity: 3,
    sellingPrice: 2400000,
    skuName: 'Test SKU 0',
    skuSpecifications: [],
    uniqueId: 'SomeUniqueId0',
    attachmentOfferings: [],
    priceTags: [],
    bundleItems: [],
    offerings: [],
    attachments: [],
  },
  {
    index: 1,
    additionalInfo: {
      brandName: 'Test Brand 1',
    },
    availability: 'withoutStock',
    id: '30',
    detailUrl: '/long-sleeve-shirt/p',
    listPrice: 945000,
    measurementUnit: 'un',
    name: '上品なサングラス',
    price: 945000,
    productId: '2000005',
    quantity: 1,
    sellingPrice: 945000,
    skuName: 'Test SKU 1',
    skuSpecifications: [],
    uniqueId: 'SomeUniqueId1',
    attachmentOfferings: [],
    priceTags: [],
    bundleItems: [],
    offerings: [],
    attachments: [],
  },
  {
    index: 2,
    additionalInfo: {
      brandName: 'Test Brand 2',
    },
    availability: 'cannotBeDelivered',
    id: '2000535',
    detailUrl: '/classy--sunglasses/p',
    listPrice: 400000,
    measurementUnit: 'un',
    name: 'กางเกงขาสั้น St Tropez',
    price: 360000,
    productId: '13',
    quantity: 4,
    sellingPrice: 360000,
    skuName: 'Test SKU 2',
    skuSpecifications: [],
    uniqueId: 'SomeUniqueId2',
    attachmentOfferings: [],
    priceTags: [],
    bundleItems: [],
    offerings: [],
    attachments: [],
  },
]
