import React from "react";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { Button, Form, Input, Upload } from "antd";
import WrapperContent from "../../components/WrapperContent/WrapperContent";

const EnterpriseProfile = () => {
  return (
    <div className="py-6">
      <WrapperContent>
        <div className="grid grid-cols-12 gap-x-3">
          <div className="col-span-4 border border-[#ebecee] rounded self-start">
            <Link
              to=""
              className="[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-[border-[#ebecee]] flex items-center h-16 bg-white gap-x-2 px-4 hover:bg-[#e6e8f8]"
            >
              <FaUser />
              <p>Cài đặt thông tin doanh nghiệp</p>
            </Link>

            <Link
              to=""
              className="[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-[border-[#ebecee]] flex items-center h-16 bg-white gap-x-2 px-4 hover:bg-[#e6e8f8]"
            >
              <MdOutlinePayment />
              <p>Lịch sử thanh toán</p>
            </Link>
          </div>

          <div className="col-span-8 bg-white rounded pt-8 pb-4">
            <div className="w-[90%] mx-auto">
              <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              >
                <img
                  src="https://picsum.photos/500/500"
                  alt="avatar"
                  className="rounded-full"
                />
              </Upload>

              <p className="text-sm text-[#999] mt-2">
                (Dung lượng ảnh tối đa: 2 MB. Định dạng: .JPEG, .JPG, .PNG)
              </p>

              <Form layout="vertical" className="mt-6">
                <Form.Item
                  label={<p className="text-base font-semibold">Tên công ty</p>}
                  name="name"
                >
                  <Input placeholder="Nhập tên công ty" className="h-10" />
                </Form.Item>

                <Form.Item
                  label={<p className="text-base font-semibold">Email</p>}
                  name="email"
                >
                  <Input placeholder="Nhập email" className="h-10" />
                </Form.Item>

                <Form.Item
                  label={
                    <p className="text-base font-semibold">Số điện thoại</p>
                  }
                  name="phone"
                >
                  <Input placeholder="Nhập số điện thoại" className="h-10" />
                </Form.Item>

                <Form.Item
                  label={<p className="text-base font-semibold">Địa chỉ</p>}
                  name="address"
                >
                  <Input placeholder="Nhập địa chỉ" className="h-10" />
                </Form.Item>

                <Form.Item
                  label={<p className="text-base font-semibold">Mật khẩu</p>}
                  name="password"
                >
                  <Input.Password
                    placeholder="Nhập mật khẩu"
                    className="h-10"
                  />
                </Form.Item>
              </Form>
            </div>

            <div className="px-3 border-t border-t-[#ddeaff] pt-4 flex gap-x-2 justify-center">
              <Button className="bg-[#f1600d] hover:!bg-[#f1600d] h-10 rounded w-40 max-w-full">
                <p className="uppercase text-white text-base font-semibold">
                  Chỉnh sửa
                </p>
              </Button>

              <Button className="bg-[#011bb6] hover:!bg-[#011bb6] h-10 rounded w-40 max-w-full">
                <p className="uppercase text-white text-base font-semibold">
                  Lưu
                </p>
              </Button>
            </div>
          </div>
        </div>
      </WrapperContent>
    </div>
  );
};

export default EnterpriseProfile;
