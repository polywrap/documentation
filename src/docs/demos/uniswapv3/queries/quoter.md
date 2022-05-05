---
id: quoter
title: Quoter
---

### quoteCallParameters

_Produces the on-chain method name of the appropriate function within QuoterV2, and the relevant hex encoded parameters._

```graphql
quoteCallParameters(
  route: Route! # The swap route, a list of pools through which a swap can occur
  amount: TokenAmount! # The amount of the quote, either an amount in, or an amount out
  tradeType: TradeType! # The trade type, either exact input or exact output
  options: QuoteOptions # Optional configuration
): MethodParameters!
```