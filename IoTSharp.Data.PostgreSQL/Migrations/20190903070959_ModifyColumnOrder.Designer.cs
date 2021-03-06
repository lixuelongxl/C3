// <auto-generated />
using System;
using IoTSharp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IoTSharp.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20190903070959_ModifyColumnOrder")]
    partial class ModifyColumnOrder
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("IoTSharp.Data.AuditLog", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ActionData")
                        .HasColumnType("jsonb");

                    b.Property<string>("ActionName");

                    b.Property<string>("ActionResult")
                        .HasColumnType("jsonb");

                    b.Property<DateTime>("ActiveDateTime");

                    b.Property<Guid?>("CustomerId");

                    b.Property<Guid>("ObjectID");

                    b.Property<string>("ObjectName");

                    b.Property<int>("ObjectType");

                    b.Property<Guid?>("TenantId");

                    b.Property<string>("UserId");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("TenantId");

                    b.ToTable("AuditLog");
                });

            modelBuilder.Entity("IoTSharp.Data.Customer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.Property<string>("Phone");

                    b.Property<string>("Province");

                    b.Property<string>("Street");

                    b.Property<Guid?>("TenantId");

                    b.Property<int>("ZipCode");

                    b.HasKey("Id");

                    b.HasIndex("TenantId");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("IoTSharp.Data.DataStorage", b =>
                {
                    b.Property<int>("Catalog");

                    b.Property<Guid>("DeviceId");

                    b.Property<string>("KeyName");

                    b.Property<DateTime>("DateTime");

                    b.Property<int>("DataSide");

                    b.Property<int>("Type");

                    b.Property<byte[]>("Value_Binary");

                    b.Property<bool>("Value_Boolean");

                    b.Property<DateTime>("Value_DateTime");

                    b.Property<double>("Value_Double");

                    b.Property<string>("Value_Json")
                        .HasColumnType("jsonb");

                    b.Property<long>("Value_Long");

                    b.Property<string>("Value_String");

                    b.Property<string>("Value_XML")
                        .HasColumnType("xml");

                    b.HasKey("Catalog", "DeviceId", "KeyName", "DateTime");

                    b.HasIndex("Catalog");

                    b.HasIndex("Catalog", "DeviceId");

                    b.HasIndex("Catalog", "DeviceId", "KeyName");

                    b.HasIndex("Catalog", "DeviceId", "KeyName", "DateTime");

                    b.ToTable("DataStorage");

                    b.HasDiscriminator<int>("Catalog").HasValue(0);
                });

            modelBuilder.Entity("IoTSharp.Data.Device", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CustomerId");

                    b.Property<int>("DeviceType");

                    b.Property<string>("Name");

                    b.Property<Guid?>("OwnerId");

                    b.Property<Guid?>("TenantId");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("OwnerId");

                    b.HasIndex("TenantId");

                    b.ToTable("Device");

                    b.HasDiscriminator<int>("DeviceType").HasValue(0);
                });

            modelBuilder.Entity("IoTSharp.Data.DeviceIdentity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("DeviceId");

                    b.Property<string>("IdentityId")
                        .IsRequired();

                    b.Property<int>("IdentityType");

                    b.Property<string>("IdentityValue");

                    b.HasKey("Id");

                    b.HasIndex("DeviceId");

                    b.ToTable("DeviceIdentities");
                });

            modelBuilder.Entity("IoTSharp.Data.Relationship", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CustomerId");

                    b.Property<string>("IdentityUserId");

                    b.Property<Guid?>("TenantId");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("IdentityUserId");

                    b.HasIndex("TenantId");

                    b.ToTable("Relationship");
                });

            modelBuilder.Entity("IoTSharp.Data.RetainedMessage", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("Payload");

                    b.Property<int>("QualityOfServiceLevel");

                    b.Property<bool>("Retain");

                    b.Property<string>("Topic");

                    b.HasKey("Id");

                    b.ToTable("RetainedMessage");
                });

            modelBuilder.Entity("IoTSharp.Data.Tenant", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<string>("EMail");

                    b.Property<string>("Name");

                    b.Property<string>("Phone");

                    b.Property<string>("Province");

                    b.Property<string>("Street");

                    b.Property<int>("ZipCode");

                    b.HasKey("Id");

                    b.ToTable("Tenant");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("IoTSharp.Data.AttributeData", b =>
                {
                    b.HasBaseType("IoTSharp.Data.DataStorage");

                    b.HasDiscriminator().HasValue(1);
                });

            modelBuilder.Entity("IoTSharp.Data.AttributeLatest", b =>
                {
                    b.HasBaseType("IoTSharp.Data.DataStorage");

                    b.HasDiscriminator().HasValue(2);
                });

            modelBuilder.Entity("IoTSharp.Data.TelemetryData", b =>
                {
                    b.HasBaseType("IoTSharp.Data.DataStorage");

                    b.HasDiscriminator().HasValue(3);
                });

            modelBuilder.Entity("IoTSharp.Data.TelemetryLatest", b =>
                {
                    b.HasBaseType("IoTSharp.Data.DataStorage");

                    b.HasDiscriminator().HasValue(4);
                });

            modelBuilder.Entity("IoTSharp.Data.Gateway", b =>
                {
                    b.HasBaseType("IoTSharp.Data.Device");

                    b.HasDiscriminator().HasValue(1);
                });

            modelBuilder.Entity("IoTSharp.Data.AuditLog", b =>
                {
                    b.HasOne("IoTSharp.Data.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("IoTSharp.Data.Tenant", "Tenant")
                        .WithMany()
                        .HasForeignKey("TenantId");
                });

            modelBuilder.Entity("IoTSharp.Data.Customer", b =>
                {
                    b.HasOne("IoTSharp.Data.Tenant", "Tenant")
                        .WithMany("Customers")
                        .HasForeignKey("TenantId");
                });

            modelBuilder.Entity("IoTSharp.Data.Device", b =>
                {
                    b.HasOne("IoTSharp.Data.Customer", "Customer")
                        .WithMany("Devices")
                        .HasForeignKey("CustomerId");

                    b.HasOne("IoTSharp.Data.Gateway", "Owner")
                        .WithMany("Children")
                        .HasForeignKey("OwnerId");

                    b.HasOne("IoTSharp.Data.Tenant", "Tenant")
                        .WithMany("Devices")
                        .HasForeignKey("TenantId");
                });

            modelBuilder.Entity("IoTSharp.Data.DeviceIdentity", b =>
                {
                    b.HasOne("IoTSharp.Data.Device", "Device")
                        .WithMany()
                        .HasForeignKey("DeviceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("IoTSharp.Data.Relationship", b =>
                {
                    b.HasOne("IoTSharp.Data.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", "IdentityUser")
                        .WithMany()
                        .HasForeignKey("IdentityUserId");

                    b.HasOne("IoTSharp.Data.Tenant", "Tenant")
                        .WithMany()
                        .HasForeignKey("TenantId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
