import {useSearchParams} from '@remix-run/react';
import {IconChevronLeft, IconChevronRight} from '@tabler/icons';

import {Button, Select} from '~/components/shared';

interface Props {
  totalPages?: number;
}

const pageSizes = [10, 25, 50, 100];

export default function Pager({totalPages = 1}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? 1);
  const pageSize = Number(searchParams.get('pageSize') ?? 10);

  const currentParams = Object.fromEntries(searchParams.entries());

  const handlePageChange = (page: number) => {
    setSearchParams({...currentParams, page: page.toString()});
  };

  const handlePageSizeChange = (size: string) => {
    // when changing page size go back to page 1 to make sure we don't end up on an "orphan" page
    setSearchParams({...currentParams, pageSize: size, page: '1'});
  };

  if (totalPages == 0) return null;

  return (
    <div className="flex flex-row items-end justify-end">
      <div className="btn-group pr-4">
        <Button
          variant="outline"
          shape="square"
          color="primary"
          onClick={() => handlePageChange(1)}
        >
          <IconChevronLeft />
        </Button>
        {[...Array(totalPages + 1).keys()].slice(1).map((page) => (
          <Button
            key={page}
            variant={currentPage !== page ? 'outline' : undefined}
            color="primary"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          shape="square"
          color="primary"
          onClick={() => handlePageChange(totalPages)}
        >
          <IconChevronRight />
        </Button>
      </div>
      <div>
        <Select
          name="pageSize"
          placeholder="Page Size"
          label="Page Size"
          defaultValue={pageSize.toString()}
          data={pageSizes.map((s) => ({value: s.toString(), label: s.toString()}))}
          onChange={handlePageSizeChange} // TODO : not working with new select component
        />
      </div>
    </div>
  );
}
