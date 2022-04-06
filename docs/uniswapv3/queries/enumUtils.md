---
id: enumUtils
title: Enum Utilities
---

### feeAmountToTickSpacing

_Returns the tick spacing associated with a FeeAmount enum value_

```graphql
feeAmountToTickSpacing(
  feeAmount: FeeAmount! 
): Int32!
```

### getFeeAmount

_Returns the fee (in one-hundred-thousandths of a percent) associated with a FeeAmount enum value_

```graphql
getFeeAmount(
  feeAmount: FeeAmount! 
): UInt32!
```

### getPermitV

_Returns v value associated with a PermitV enum value_

```graphql
getPermitV(
  permitV: PermitV! 
): Int32!
```