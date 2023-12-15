



CREATE TABLE "Оплата"
(

	"primaryKey" RAW(16) NOT NULL,

	"СпособОпл" NVARCHAR2(8) NULL,

	"Сумма" NUMBER(10) NULL,

	"Время" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"СделатьФото" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СделатьФото"
(

	"primaryKey" RAW(16) NOT NULL,

	"КолВоФото" NUMBER(10) NULL,

	"КатегорФото" NVARCHAR2(15) NULL,

	"Цена" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДопНастройки"
(

	"primaryKey" RAW(16) NOT NULL,

	"Уголок" NUMBER(1) NULL,

	"ЧбЦвет" NUMBER(1) NULL,

	"СделатьФото" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПечатьФото"
(

	"primaryKey" RAW(16) NOT NULL,

	"Размер" NVARCHAR2(255) NULL,

	"СделатьФото" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"Оплата" RAW(16) NOT NULL,

	"ОтправНаПочту" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтправНаПочту"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Email" NVARCHAR2(255) NULL,

	"СделатьФото" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Оплата"
	ADD CONSTRAINT "Оплата_FСдела_9749" FOREIGN KEY ("СделатьФото") REFERENCES "СделатьФото" ("primaryKey");

CREATE INDEX "Оплата_IСделат_651" on "Оплата" ("СделатьФото");

ALTER TABLE "ДопНастройки"
	ADD CONSTRAINT "ДопНастройки__4308" FOREIGN KEY ("СделатьФото") REFERENCES "СделатьФото" ("primaryKey");

CREATE INDEX "ДопНастройки__7653" on "ДопНастройки" ("СделатьФото");

ALTER TABLE "ПечатьФото"
	ADD CONSTRAINT "ПечатьФото_FС_9124" FOREIGN KEY ("СделатьФото") REFERENCES "СделатьФото" ("primaryKey");

CREATE INDEX "ПечатьФото_IС_3506" on "ПечатьФото" ("СделатьФото");

ALTER TABLE "Клиент"
	ADD CONSTRAINT "Клиент_FОплата_0" FOREIGN KEY ("Оплата") REFERENCES "Оплата" ("primaryKey");

CREATE INDEX "Клиент_IОплата" on "Клиент" ("Оплата");

ALTER TABLE "Клиент"
	ADD CONSTRAINT "Клиент_FОтпра_5742" FOREIGN KEY ("ОтправНаПочту") REFERENCES "ОтправНаПочту" ("primaryKey");

CREATE INDEX "Клиент_IОтправ_111" on "Клиент" ("ОтправНаПочту");

ALTER TABLE "ОтправНаПочту"
	ADD CONSTRAINT "ОтправНаПочт_2543" FOREIGN KEY ("СделатьФото") REFERENCES "СделатьФото" ("primaryKey");

CREATE INDEX "ОтправНаПочт_2106" on "ОтправНаПочту" ("СделатьФото");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


