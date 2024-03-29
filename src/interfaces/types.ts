export type PaymentMethodType = 'credit' | 'boleto' | 'pix';

export type InvoiceStatusType = 'paid' | 'pending' | 'canceled' | 'failed';

export type BoletoStatusType = 'paid' | 'not_paid';

export type PlanFrequencyType = 'daily' | 'monthly' | 'weekly' | 'annually';

export type ProductStatusType = 'active' | 'disabled';

export type EventType =
  | 'all'
  | 'bank_account.associated'
  | 'bank_account.deleted'
  | 'buyer.transaction.canceled'
  | 'buyer.transaction.charged_back'
  | 'buyer.transaction.disputed'
  | 'buyer.transaction.failed'
  | 'buyer.transaction.pre_authorized'
  | 'buyer.transaction.reversed'
  | 'buyer.transaction.succeeded'
  | 'buyer.transaction.updated'
  | 'buyer.card.associated'
  | 'document.created'
  | 'document.updated'
  | 'invoice.created'
  | 'invoice.canceled'
  | 'invoice.overdue'
  | 'invoice.paid'
  | 'invoice.refunded'
  | 'plan.created'
  | 'plan.deleted'
  | 'plan.updated'
  | 'receivable.canceled'
  | 'receivable.created'
  | 'receivable.deleted'
  | 'receivable.paid'
  | 'receivable.refunded'
  | 'receivable.scheduled'
  | 'seller.actived'
  | 'seller.created'
  | 'seller.deleted'
  | 'seller.denied'
  | 'seller.enabled'
  | 'seller.updated'
  | 'subscription.active'
  | 'subscription.created'
  | 'subscription.deleted'
  | 'subscription.expired'
  | 'subscription.suspended'
  | 'subscription.updated'
  | 'subscription.paid'
  | 'transaction.canceled'
  | 'transaction.capture.failed'
  | 'transaction.capture.succeeded'
  | 'transaction.charged_back'
  | 'transaction.commission.succeeded'
  | 'transaction.created'
  | 'transaction.dispute.succeeded'
  | 'transaction.disputed'
  | 'transaction.failed'
  | 'transaction.pre_authorization.succeeded'
  | 'transaction.pre_authorized'
  | 'transaction.reversed'
  | 'transaction.succeeded'
  | 'transaction.updated'
  | 'transaction.void.failed'
  | 'transaction.void.succeeded'
  | 'transfer.canceled'
  | 'transfer.confirmed'
  | 'transfer.created'
  | 'transfer.failed'
  | 'transfer.succeeded';

export type SubscriptionStatusType =
  | 'active'
  | 'canceled'
  | 'expired'
  | 'suspended';

export type TransactionStatusType =
  | 'new'
  | 'pending'
  | 'pre_authorized'
  | 'succeeded'
  | 'failed'
  | 'reversed'
  | 'canceled'
  | 'refunded'
  | 'dispute'
  | 'charged_back';
