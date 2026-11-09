import type { LicenseEntitlements, LicensePlan, LicenseStatus } from "./types";

const DEFAULT_LICENSE_STATUS: LicenseStatus = {
	plan: "team",
	state: "active",
	features: ["branding", "accounts", "shared_mailboxes", "forwarding"],
	seatLimit: null,
	instanceId: "default",
	instanceUrl: null,
	active: true,
	activatedAt: new Date(0),
	validatedAt: new Date(0),
};

const DEFAULT_ENTITLEMENTS: LicenseEntitlements = {
	plan: "team",
	canCustomizeBranding: true,
	canManageAccounts: true,
	canShareMailboxes: true,
	accountSeatLimit: null,
	canForwardEmail: true,
};

export async function getLicenseStatus(_env?: CloudflareEnv): Promise<LicenseStatus> {
	return DEFAULT_LICENSE_STATUS;
}

export async function getLicenseEntitlements(_env?: CloudflareEnv): Promise<LicenseEntitlements> {
	return DEFAULT_ENTITLEMENTS;
}

export function activateLicense(
	env: CloudflareEnv,
	_licenseKey: string,
	_instanceUrl: string,
	_plan?: Exclude<LicensePlan, "community">,
): Promise<LicenseStatus> {
	return getLicenseStatus(env);
}

export function validateLicense(env: CloudflareEnv, _licenseKey: string, _instanceUrl: string): Promise<LicenseStatus> {
	return getLicenseStatus(env);
}

export function deactivateLicense(env: CloudflareEnv): Promise<LicenseStatus> {
	return getLicenseStatus(env);
}

