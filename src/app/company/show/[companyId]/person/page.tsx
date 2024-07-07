import CompanyPersonList from '@modules/lists/company-person-list';

interface CompanyPage {
  params: {
    companyId: string;
  };
}
export default function CompanyPerson({
  params: { companyId },
}: Readonly<CompanyPage>) {
  return <CompanyPersonList companyId={companyId} />;
}
