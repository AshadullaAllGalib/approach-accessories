<script setup></script>

<template>
  <div class="contact-banner">
    <h2>Contact Us</h2>
    <p>We are always happy to help you find the right solution for your needs.</p>
  </div>

  <div class="contact">
    <div class="contact-details">
      <div class="contact-details_info">
        <div class="phone pe">
          <h2>Call Us</h2>
          <a href="tel:+880 1974 338707">
            <i class="pi pi-phone"></i>+880 1974 338707
          </a>
          <a href="tel:+880 1975 411616">
            <i class="pi pi-phone"></i>+880 1975 411616
          </a>
          <a href="tel:+880 1718 094002">
            <i class="pi pi-phone"></i>+880 1718 094002
          </a>
          <a href="tel:+880 1716 009940">
            <i class="pi pi-phone"></i>+880 1716 009940
          </a>
        </div>
        <div class="email pe">
          <h2>Mail Us</h2>
          <a href="mailto:info@approach-bd.com">
            <i class="pi pi-envelope"></i>info@approach-bd.com
          </a>
          <a href="mailto:approach@dhaka.net">
            <i class="pi pi-envelope"></i>approach@dhaka.net
          </a>
        </div>
        <!-- <div class="address">
          <p>Plot # 160, Uttar Meitka, Shyampur Bazar,
            Hemayetpur, Savar, Dhaka-1348</p>
        </div> -->
      </div>
      <div class="form-main">
        <div class="main-wrapper">
          <h3 class="form-head">Contact From</h3>
          <form class="form-wrapper">
            <div class="form-card">
              <input class="form-input" type="text" name="full_name" required="required" />
              <label class="form-label" for="full_name">Name</label>
            </div>

            <div class="form-card">
              <input class="form-input" type="email" name="email" required="required" />
              <label class="form-label" for="email">Email</label>
            </div>

            <div class="form-card">
              <input class="form-input" type="number" name="phone_number" required="required" />
              <label class="form-label" for="phone_number">Phone number</label>
            </div>

            <div class="form-card">
              <textarea class="form-textarea" maxlength="420" rows="2" name="phone_number"
                required="required"></textarea>
              <label class="form-textarea-label" for="phone_number">Address</label>
            </div>
            <div class="btn-wrap">
              <button> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.contact-banner {
  background: var(--color-primary-dark);
  height: 200px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: #fff;
    margin-bottom: 0;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    width: 90%;
  }
}

.contact {
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;

  &-details {
    display: flex;
    justify-content: center;
    align-items: center;

    &_info {
      width: 35%;



      .pe {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 55%;
        padding-bottom: 10px;

        h2 {
          margin-bottom: 7px;
          font-size: 30px;
        }

        a {
          text-decoration: none;
          background: var(--vt-c-neviblue);
          padding: 7px;
          color: #ffffff;
          font-size: 16px;
          border-radius: 5px;
          transition: all ease-in-out .3s;

          &:hover {
            transform: scale(1.05);
          }

          i {
            padding: 0 10px 0 7px;
          }
        }
      }
    }

    .form-main {
      width: 40%;

      .main-wrapper {
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 0 5px 5px #1e85e620;
        backdrop-filter: blur(5px);
        background-color: var(--vt-c-neviblue);

        .form-head {
          font-size: 30px;
          line-height: 40px;
          font-weight: 600;
          text-align: center;
          margin: 0px 0 25px;
          color: #fff;
        }

        .form-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 15px;

          .form-card {
            position: relative;
            width: 100%;

            .form-input {
              padding: 10px 10px 10px 25px;
              width: 100%;
              border: 1px solid rgb(255, 253, 253);
              border-radius: 5px;
              background: transparent;
              outline: none;
              font-size: 16px;
              line-height: 30px;
              font-weight: 400;
              color: #ffffff;
              margin-top: 5px;

              &:valid,
              &:focus {
                border: 1px solid rgb(214, 252, 253);
              }

              &:valid~.form-label,
              &:focus~.form-label {
                color: #ffffff;
                top: 30%;
                transform: translateY(-70%);
                font-size: 13px;
                line-height: 23px;
              }

              &:-webkit-autofill,
              &:-webkit-autofill:hover,
              &:-webkit-autofill:focus,
              &:-webkit-autofill:active {
                transition: background-color 9999s ease-in-out 0s;
              }

              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }

            .form-label {
              position: absolute;
              left: 25px;
              top: 50%;
              transform: translateY(-50%);
              pointer-events: none;
              transition: 0.3s;
              margin: 0;
              font-size: 18px;
              line-height: 28px;
              font-weight: 500;
              color: #ffffff;
            }

            .form-textarea {
              padding: 20px 25px 15px;
              width: 100%;
              border: 1px solid rgb(255, 253, 253);
              border-radius: 5px;
              background: transparent;
              outline: none;
              font-size: 16px;
              line-height: 30px;
              font-weight: 400;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              resize: none;
              box-sizing: border-box;


              &:valid,
              &:focus {
                border: 1px solid rgb(214, 252, 253);
                color: #ffffff;
              }

              &:valid~.form-textarea-label,
              &:focus~.form-textarea-label {
                color: #ffffff;
                top: 18%;
                transform: translateY(-82%);
                font-size: 13px;
                line-height: 23px;
              }

              &:-webkit-autofill,
              &:-webkit-autofill:hover,
              &:-webkit-autofill:focus,
              &:-webkit-autofill:active {
                transition: background-color 9999s ease-in-out 0s;
              }
            }

            .form-textarea-label {
              position: absolute;
              left: 25px;
              top: 30%;
              transform: translateY(-70%);
              pointer-events: none;
              transition: 0.3s;
              margin: 0;
              font-size: 18px;
              line-height: 28px;
              font-weight: 500;
              color: #ffffff;
            }
          }

          .btn-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px 0 0;

            button {
              padding: 0 32px;
              font-size: 18px;
              line-height: 48px;
              border: 1px solid transparent;
              font-weight: 600;
              border-radius: 6px;
              transition: all 0.5s ease;
              cursor: pointer;
              box-shadow: 0 0 5px 5px #00000020;


              &:hover {
                background: var(--color-primary-dark);
                color: #ffffff;
                transform: scale(1.05);

              }
            }
          }
        }
      }
    }
  }

}

@media (max-width: 1024px) {
  .contact-banner {
    margin-top: 70px;
  }

  .contact {
    padding: 30px 0;

    &-details {
      flex-direction: column;

      &_info {
        width: auto;



        .pe {
          width: auto;

          h2 {
            font-size: 24px;
          }

          a {
            font-size: 14px;
          }
        }
      }

      .form-main {
        width: 100%;
        margin-top: 20px;

        .main-wrapper {
          padding: 15px;

          .form-head {
            font-size: 24px;
            margin: 0px 0 5px;
          }

          .form-wrapper {
            gap: 5px;

            .form-card {
              width: 100%;

              .form-input {
                font-size: 14px;
              }

              .form-label {
                font-size: 15px;
              }

              .form-textarea {
                font-size: 14px;
              }

              .form-textarea-label {
                font-size: 15px;
              }
            }

            .btn-wrap {
              padding: 10px 0 0;

              button {
                font-size: 16px;
              }
            }
          }
        }
      }
    }

  }
}
</style>
