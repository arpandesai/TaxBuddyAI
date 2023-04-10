import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { BiBookOpen, BiXCircle, BiRightArrowAlt } from 'react-icons/bi';
import { guidlines } from '../data/guidline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  height: '70vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const GuidlineBox = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>
        <BiBookOpen color="white" size="16px" /> &nbsp;
        <p className="flex items-center text-[#EDF4F4] text-[16px] font-bold cursor-pointer">
          Open modal
        </p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Guidelines</div>
              <button onClick={handleClose}>
                <BiXCircle size="24px" />
              </button>
            </div>
            <hr className="mt-4" />
            <div className="overflow-auto overflow-x-scroll">
              {guidlines.map((data, idx) => {
                return (
                  <div key={idx}>
                    <div className="mt-4 flex items-center">
                      <BiRightArrowAlt />
                      <p className="ml-2">
                        Please use numbers instead of words in TaxGPT.
                      </p>
                    </div>
                    <p className="ml-6">
                      Example :- use 2,00,000 instand of 200 thousand or 2 lakh
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default GuidlineBox;
